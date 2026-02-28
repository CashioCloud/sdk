async function loadLinks(){

    const res = await fetch('/affiliate/links')

    const data = await res.json()

    const div = document.getElementById('stores')

    div.innerHTML=""

    data.forEach(store=>{

        div.innerHTML += `
        
        <p>

        <a href="${store.url}" target="_blank">

        ${store.name}

        </a>

        </p>

        `

    })

}
