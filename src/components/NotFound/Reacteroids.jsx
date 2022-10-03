import './style.css'

import { Show } from '@chakra-ui/react'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Asteroid from './Asteroid.jsx'
import { randomNumBetweenExcluding } from './helpers'
import Ship from './Ship.jsx'

const KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    A: 65,
    D: 68,
    W: 87,
    SPACE: 32,
}

export class Reacteroids extends Component {
    constructor(props) {
        super(props)
        this.state = {
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
            context: null,
            keys: {
                left: 0,
                right: 0,
                up: 0,
                down: 0,
                space: 0,
            },
            asteroidCount: 3,
            currentScore: 0,
            topScore: localStorage['topScore'] || 0,
            inGame: false,
        }
        this.ship = []
        this.asteroids = []
        this.bullets = []
        this.particles = []
    }

    handleResize() {
        this.setState({
            screen: {
                width: window.innerWidth,
                height: window.innerHeight,
                ratio: window.devicePixelRatio || 1,
            },
        })
    }

    handleKeys(value, e) {
        let keys = this.state.keys
        if (e.keyCode === KEY.LEFT || e.keyCode === KEY.A) keys.left = value
        if (e.keyCode === KEY.RIGHT || e.keyCode === KEY.D) keys.right = value
        if (e.keyCode === KEY.UP || e.keyCode === KEY.W) keys.up = value
        if (e.keyCode === KEY.SPACE) keys.space = value
        this.setState({
            keys: keys,
        })
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeys.bind(this, false))
        window.addEventListener('keydown', this.handleKeys.bind(this, true))
        window.addEventListener('resize', this.handleResize.bind(this, false))

        const context = this.canvas.getContext('2d')
        this.setState({ context: context })
        this.startGame()
        requestAnimationFrame(() => {
            this.update()
        })
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeys)
        window.removeEventListener('keydown', this.handleKeys)
        window.removeEventListener('resize', this.handleResize)
    }

    update() {
        const context = this.state.context

        context.save()
        context.scale(this.state.screen.ratio, this.state.screen.ratio)

        // Motion trail
        context.fillStyle = '#ffffff'
        //context.globalAlpha = 0.4;
        context.fillRect(
            0,
            0,
            this.state.screen.width,
            this.state.screen.height
        )
        context.globalAlpha = 1

        // Next set of asteroids
        if (!this.asteroids.length) {
            let count = this.state.asteroidCount + 1
            this.setState({ asteroidCount: count })
            this.generateAsteroids(count)
        }

        // Check for collisions
        this.checkCollisionsWith(this.bullets, this.asteroids)
        this.checkCollisionsWith(this.ship, this.asteroids)

        // Remove or render
        this.updateObjects(this.particles, 'particles')
        this.updateObjects(this.asteroids, 'asteroids')
        this.updateObjects(this.bullets, 'bullets')
        this.updateObjects(this.ship, 'ship')

        context.restore()

        // Next frame
        requestAnimationFrame(() => {
            this.update()
        })
    }

    addScore(points) {
        if (this.state.inGame) {
            this.setState({
                currentScore: this.state.currentScore + points,
            })
        }
    }

    startGame() {
        this.setState({
            inGame: true,
            currentScore: 0,
        })

        // Make ship
        let ship = new Ship({
            position: {
                x: this.state.screen.width / 2,
                y: this.state.screen.height / 2,
            },
            create: this.createObject.bind(this),
            onDie: this.gameOver.bind(this),
        })
        this.createObject(ship, 'ship')

        // Make asteroids
        this.asteroids = []
        this.generateAsteroids(this.state.asteroidCount)
    }

    gameOver() {
        this.setState({
            inGame: false,
        })

        // Replace top score
        if (this.state.currentScore > this.state.topScore) {
            const currentScore = this.state.currentScore
            this.setState({
                topScore: currentScore,
            })
            localStorage['topScore'] = currentScore
        }
    }

    generateAsteroids(howMany) {
        let ship = this.ship[0]
        for (let i = 0; i < howMany; i++) {
            let asteroid = new Asteroid({
                size: 80,
                position: {
                    x: randomNumBetweenExcluding(
                        0,
                        this.state.screen.width,
                        ship.position.x - 60,
                        ship.position.x + 60
                    ),
                    y: randomNumBetweenExcluding(
                        0,
                        this.state.screen.height,
                        ship.position.y - 60,
                        ship.position.y + 60
                    ),
                },
                create: this.createObject.bind(this),
                addScore: this.addScore.bind(this),
            })
            this.createObject(asteroid, 'asteroids')
        }
    }

    createObject(item, group) {
        this[group].push(item)
    }

    updateObjects(items, group) {
        let index = 0
        for (let item of items) {
            if (item.delete) {
                this[group].splice(index, 1)
            } else {
                items[index].render(this.state)
            }
            index++
        }
    }

    checkCollisionsWith(items1, items2) {
        let a = items1.length - 1
        let b
        for (a; a > -1; --a) {
            b = items2.length - 1
            for (b; b > -1; --b) {
                const item1 = items1[a]
                const item2 = items2[b]
                if (this.checkCollision(item1, item2)) {
                    item1.destroy()
                    if (items1 !== this.ship) item2.destroy()
                }
            }
        }
    }

    checkCollision(obj1, obj2) {
        const vx = obj1.position.x - obj2.position.x
        const vy = obj1.position.y - obj2.position.y
        const length = Math.sqrt(vx * vx + vy * vy)
        return length < obj1.radius + obj2.radius
    }

    render() {
        let endgame
        let message

        if (this.state.currentScore > this.state.topScore) {
            message =
                'You scored ' +
                this.state.currentScore +
                ' Points. Top score, Wohoo!'
        } else {
            message = 'You scored ' + this.state.currentScore + ' Points :)'
        }

        if (!this.state.inGame) {
            endgame = (
                <div className="endgame">
                    <p>Game over!</p>
                    <p>{message}</p>
                    <button
                        className={'try-again-wrapper'}
                        onClick={this.startGame.bind(this)}
                    >
                        try again?
                    </button>
                </div>
            )
        }

        return (
            <div className={'game-wrapper'}>
                {endgame}
                <span className="score current-score">
                    Score: {this.state.currentScore}
                </span>
                <span className="score top-score">
                    High Score: {this.state.topScore}
                </span>
                <Show above={'md'}>
                    <span className="controls">
                        Use [A][S][W][D] or [←][↑][↓][→] to MOVE
                        <br />
                        Use [SPACE] to SHOOT
                    </span>

                    <Link to={'/'}>
                        <span className="homepage">GO TO HOMEPAGE</span>
                    </Link>
                </Show>
                <canvas
                    ref={canvas => (this.canvas = canvas)}
                    width={this.state.screen.width * this.state.screen.ratio}
                    height={this.state.screen.height * this.state.screen.ratio}
                />
            </div>
        )
    }
}
