const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')
context.beginPath()
context.arc(this.x, this.y, this.r, 0, Math.PI * 2)
context.strokeStyle = `black`
context.stroke()
context.fillStyle = `grey`
context.fill()
