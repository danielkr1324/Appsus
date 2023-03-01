export default {
    template: `
        <header class="app-header">
            <h1>AppSus</h1>
            <nav>
                <router-link class="nav-link" to="/">Home</router-link> |
                <router-link class="nav-link" to="/about">About</router-link> |
                <router-link class="nav-link" to="/email">Email</router-link> |
                <router-link class="nav-link" to="/keep">Keep</router-link>
            </nav>
        </header>
    `,
}
