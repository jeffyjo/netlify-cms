export default class SearchObservable {
  static observers = []

  // Add subscriber
  static subscribe(observer) {
    this.observers.push(observer)
  }

  // Remove subscriber
  static unsubscribe(observer) {
    this.observers = this.observers.filter(subscriber => subscriber !== observer)
  }

  // Notify all subscribers
  static notify(data) {
    this.observers.forEach(observer => observer(data))
  }
}