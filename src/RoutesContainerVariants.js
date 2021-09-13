const containerVariants = {
    from: {
        opacity: 0,
        y: "10vh",
    },
    to: {
        opacity: 1,
        y: 0,
        transition: { delay: 0.2, duration: 0.4 }
    },
    exit: {
        y: "10vh",
        opacity: 0,
        transition: { type: "tween", duration: 0.3 }
    }
}

export default containerVariants;