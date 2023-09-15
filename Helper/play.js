const fetchData = () => {
    // Already coded
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 2000)
    });
    return promise;
};

setTimeout(() => {
    console.log('Timer is done!');
    fetchData()
    .then(text => {
        console.log(text)
        return fetchData()
    })
    .then(text2 => {
        console.log(text2)
    })
}, 3000);