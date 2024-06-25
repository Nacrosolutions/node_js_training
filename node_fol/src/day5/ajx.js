const url = 'https://api.github.com/users/wycats' ;




class MyAjax 
{
    constructor(url) {
        this.url=url
    }

    async myfetch() {
        const res=await fetch(this.url);
        const data=await res.json();
        console.log(data)
        return data
    }
}

const aj01 = new MyAjax(url)
aj01.myfetch();