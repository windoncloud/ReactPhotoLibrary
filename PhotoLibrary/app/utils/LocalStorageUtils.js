const isAvailable = (function isAvailableIffe() {
  const test = 'test';
  try {
    sessionStorage.setItem(test, test);
    sessionStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}());

class util {
  static get(key) {
    if (isAvailable) {
      return sessionStorage.getItem(key);
    }
    return null;
  }
  static set(key, value) {
    if (isAvailable) {
      return sessionStorage.setItem(key, value);
    }

    return null;
  }
  static delete(key) {
    if (isAvailable) {
      return sessionStorage.removeItem(key);
    }

    return null;
  }

  static clearAll() {
    if (isAvailable) {
      return sessionStorage.clear();
    }

    return null;
  }
}

export default util;
