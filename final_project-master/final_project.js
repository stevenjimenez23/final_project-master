var namespace = "http://www.w3.org/2000/svg"

function nextpage(){
document.getElementById('olive').setAttribute("style","background-image: url('data:image/jpeg;base64,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');")
}


// DO NOT EDIT CODE BELOW THIS LINE!
function getX(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the x coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("x")) {
      return parseFloat(shape.getAttribute("x"))
    } else if (shape.hasAttribute("cx")) {
      return parseFloat(shape.getAttribute("cx"))
    }  else if (shape.hasAttribute("x1")) {
      return parseFloat(shape.getAttribute("x1"))
    }
  } catch(err) {
    throw "You're trying to get the x coordinate of something that isn't a shape!"
  }
}

function getY(shape) {
  if (!shape) {
    throw "Uh oh, you tried to get the y coordinate of a shape that doesn't exist!"
  }
  try {
    if (shape.hasAttribute("y")) {
      return parseFloat(shape.getAttribute("y"))
    } else if (shape.hasAttribute("cy")) {
      return parseFloat(shape.getAttribute("cy"))
    } else if (shape.hasAttribute("y1")) {
      return parseFloat(shape.getAttribute("y1"))
    }
  } catch (err) {
    throw "You're trying to get the y coordinate of something that isn't a shape!"
  }
}

function setX(shape, x) {
  if (!shape) {
    throw "I can't set the x of a shape that doesn't exist!"
  }
  if (isNaN(x)) {
    throw "You need to tell me what to set the x coordinate to!"
  }
  if (shape.hasAttribute("x")) {
    shape.setAttribute("x", x)
  } else if (shape.hasAttribute("cx")) {
    shape.setAttribute("cx", x)
  } else if (shape.hasAttribute("x1")) {
    var xDiff = parseFloat(shape.getAttribute("x2")) - parseFloat(shape.getAttribute("x1"))
    shape.setAttribute("x1", x)
    shape.setAttribute("x2", x + xDiff)
  }
}

function setY(shape, y) {
  if (!shape) {
    throw "I can't set the y of a shape that doesn't exist!"
  }
  if (isNaN(y)) {
    throw "You need to tell me what to set the y coordinate to!"
  }
  if (shape.hasAttribute("y")) {
    shape.setAttribute("y", y)
  } else if (shape.hasAttribute("cy")) {
    shape.setAttribute("cy", y)
  } else if (shape.hasAttribute("y1")) {
    var yDiff = parseFloat(shape.getAttribute("y2")) - parseFloat(shape.getAttribute("y1"))
    shape.setAttribute("y1", y)
    shape.setAttribute("y2", y + yDiff)
  }
}

function move(shape, dx, dy) {
  if (!shape) {
    throw "I can't move a shape that doesn't exist!"
  }
  if (isNaN(dx)) {
    throw "You need to tell me how much to move the shape in the x direction!"
  }
  if (isNaN(dy)) {
    throw "You need to tell me how much to move the shape in the y direction!"
  }
  if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
    var x = parseFloat(shape.getAttribute("x"))
    var y = parseFloat(shape.getAttribute("y"))
    shape.setAttribute("x", x + dx)
    shape.setAttribute("y", y + dy)
  } else if (shape.hasAttribute("cx")) {
    var cx = parseFloat(shape.getAttribute("cx"))
    var cy = parseFloat(shape.getAttribute("cy"))
    shape.setAttribute("cx", cx + dx)
    shape.setAttribute("cy", cy + dy)
  } else if (shape.hasAttribute("x1")) {
    var x1 = parseFloat(shape.getAttribute("x1"))
    var y1 = parseFloat(shape.getAttribute("x1"))
    setX(shape, x1 + dx)
    setY(shape, y1 + dy)
  }
}

function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)

  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}

function collides(shape1, shape2) {
  var centerX, centerY
  if (shape1.hasAttribute("x")) {
    centerX = getX(shape1) + parseFloat(shape1.getAttribute("width"))/2
    centerY = getY(shape1) + parseFloat(shape1.getAttribute("height"))/2
  } else if (shape1.hasAttribute("cx")) {
    centerX = getX(shape1)
    centerY = getY(shape1)
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }

  var xMin, xMax, yMin, yMax
  if (shape2.hasAttribute("x")) {
    xMin = getX(shape2)
    yMin = getY(shape2)
    xMax = getX(shape2) + parseFloat(shape2.getAttribute("width"))
    yMax = getY(shape2) + parseFloat(shape2.getAttribute("height"))
  } else if (shape2.hasAttribute("cx")) {
    if (shape2.hasAttribute("rx")) {
      var rx = parseFloat(shape2.getAttribute("rx"))
      var ry = parseFloat(shape2.getAttribute("ry"))
      xMin = getX(shape2) - rx
      yMin = getY(shape2) - ry
      xMax = getX(shape2) + rx
      yMax = getY(shape2) + ry
    } else {
      var r = parseFloat(shape2.getAttribute("r"))
      xMin = getX(shape2) - r
      yMin = getY(shape2) - r
      xMax = getX(shape2) + r
      yMax = getY(shape2) + r
    }
  } else {
    throw "Oops, that kind of shape isn't supported by the collide function!"
  }
  return (centerX > xMin &&
          centerX < xMax &&
         centerY > yMin &&
         centerY < yMax)
}
