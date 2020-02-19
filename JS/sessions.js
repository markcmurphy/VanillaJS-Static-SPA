class Sessions {
    async getSessions() {
        const response = await fetch(`sessions.json`, {});
        const sessions = await response.json();
        return {
            sessions
        }
    }
}