export const defaultTheme = {
    textDecorations: {
        overdue: 'underline',
        due: 'none',
        completed: 'line-through'
    },
    colors: {
        overdue: 'red',
        due: 'green',
        completed: 'gray',
        navBg: '#160f42',
        navFontColor: '#e7f33f'
    },
    animations: {
        overdue: {
            animation: `animation: urgent .5s linear infinite;`,
            keyframes: `@keyframes urgent {
                50% {
                    opacity: 0;
                }
            }`
        }
    }
}