export default class Media {
  constructor({ title, isCheckedOut = false, ratings = [] }) {
    this._title = title;
    this._isCheckedOut = isCheckedOut;
    this._ratings = ratings;
  }
  get title() {
    if (typeof this.title === "string") {
      return this._title;
    } else {
      return "No title shown";
    }
  }
  get isCheckedOut() {
    if (typeof this._isCheckedOut === "boolean") {
      return this._isCheckedOut;
    } else {
      return "No information for checkout";
    }
  }
  set isCheckedOut(boolean) {
    if (typeof boolean === "boolean") {
      this._isCheckedOut = boolean;
    } else {
      console.log("Enter the boolean value");
    }
  }
  get ratings() {
    if (Array.isArray(this._ratings)) {
      return this._ratings;
    } else {
      return "No ratings yet";
    }
  }
  getAverageRating() {
    const sum = this._ratings.reduce((a, b) => a + b);
    return sum / this._ratings.length;
  }
  addRating(rating) {
    if (typeof rating === "number" && rating >= 1 && rating <= 5) {
      return this._ratings.push(rating);
    } else {
      return "Put a number between 1 and 5";
    }
  }
}
