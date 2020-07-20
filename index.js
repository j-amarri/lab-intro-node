class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length = this.items.length;
    this.items.sort(function (a, b) {
      return a - b;
    });
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      const index = this.items.indexOf(pos);
      return this.items[index];
    }
  }

  max() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (!this.length) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let totalSum = 0;
    for (const element of this.items) {
      console.log(element);
      totalSum += element;
      //console.log(totalSum);
    }
  }

  avg() {}
}

module.exports = SortedList;
