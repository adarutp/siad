class User {
  private _username: string;

  constructor(username: string) {
    this._username = username;
  }

  get username(): string {
    return this._username;
  }

  set username(newUsername: string) {
    if (newUsername && newUsername.length > 0) {
      this._username = newUsername;
    } else {
      throw new Error('Username cannot be empty.');
    }
  }
}

// Usage
const user = new User('initialUsername');
console.log(user.username); // Output: initialUsername
user.username = 'newUsername';
console.log(user.username); // Output: newUsername
