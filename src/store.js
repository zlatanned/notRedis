class KeyValueStore {
    constructor() {
        this.store = new Map();
    }

    // SET command: sets a key-value pair (both strings)
    set(key, value) {
        if (typeof key !== 'string' || typeof value !== 'string') {
            return 'ERROR: Both key and value must be strings';
        }
        this.store.set(key, value);
        return `OK`;
    }

    // GET command: retrieves the value of a key
    get(key) {
        if (!this.store.has(key)) {
            return `ERROR: Key "${key}" does not exist`;
        }
        return this.store.get(key);
    }

    // DEL command: deletes a key
    del(key) {
        if (!this.store.has(key)) {
            return `ERROR: Key "${key}" does not exist`;
        }
        this.store.delete(key);
        return `OK`;
    }

    // FLUSHALL command: clears the entire store
    clear() {
        this.store.clear();
        return `OK`;
    }

    // Executes a command based on the input string
    executeCommand(command) {
        const parts = command.trim().split(' ');
        const action = parts[0].toUpperCase();
        const key = parts[1];
        const value = parts.slice(2).join(' '); // In case the value contains spaces

        switch (action) {
            case 'SET':
                if (!key || !value) {
                    return 'ERROR: SET command requires both key and value';
                }
                return this.set(key, value);
            case 'GET':
                if (!key) {
                    return 'ERROR: GET command requires a key';
                }
                return this.get(key);
            case 'DEL':
                if (!key) {
                    return 'ERROR: DEL command requires a key';
                }
                return this.del(key);
            case 'FLUSHALL':
                return this.clear();
            default:
                return 'ERROR: Unsupported command';
        }
    }
}

module.exports = KeyValueStore;
