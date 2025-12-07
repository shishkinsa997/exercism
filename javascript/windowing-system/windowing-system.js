// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};
}

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position();
  }

  resize(newSize) {
    let newWidth = Math.max(newSize.width, 1);
    let newHeight = Math.max(newSize.height, 1);
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    newWidth = Math.min(newWidth, maxWidth);
    newHeight = Math.min(newHeight, maxHeight);
    this.size.resize(newWidth, newHeight);
  }

  move(newPosition) {
    let newX = Math.max(newPosition.x, 0);
    let newY = Math.max(newPosition.y, 0);
    const maxX = this.screenSize.width - this.size.width;
    const maxY = this.screenSize.height - this.size.height;
    newX = Math.min(newX, maxX);
    newY = Math.min(newY, maxY);
    this.position.x = newX;
    this.position.y = newY;
  }
}

export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300));
  programWindow.move(new Position(100, 150));
  return programWindow;
}
