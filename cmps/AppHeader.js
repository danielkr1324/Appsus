export default {
    template: `
        <header class="app-header">
        <router-link to="/"><h1>AppSus</h1></router-link> 
            <nav>
                <router-link class="nav-link" to="/">Home</router-link> |
                <router-link class="nav-link" to="/about">About</router-link> |
                <router-link class="nav-link" to="/email">Email</router-link> |
                <router-link class="nav-link" to="/keep">Keep</router-link>
            </nav>
        </header>
    `,
}
