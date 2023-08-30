# kobenii

*cute mini js framework*

Kobeni is cute, super lightweight, easy to use JavaScript framework designed to provide essential functionalities for building web applications. **Minified version of kobeni ~ 1.14KB**. Kobeni offers powerful features such as **routing, local state, and components**. Kobenii uses .html files as it's file format like a true OG.

### Installation

```
curl https://raw.githubusercontent.com/xorvet/kobenii/main/index.min.js > kobenii.js
```

### Setup
`index.html`
```html
<script type="module">
  import { ... } from './kobenii.js';
</script>
```

### Usage

#### Initialization
```javascript
import { Init } from './kobenii.js';
Init();
```

**Note: when creating component or a page that will be routed by kobenii you have to make sure to create only two parent elements where first parent should always be a content element second should be a script element. If broken these rules it won't work. Any script tag inside content parent won't work. This is how it should look:**
```html
<main>
  //elements here
  
  <style>
    //your styles here
  </style>
</main>

<script>
//your javascript here
</script>
```

#### Components
```html
<body>
  <main>
    <span class="header"></span>
  </main>

  <script type="module">
    import { Component } from './kobenii.js'; 
    
    //Component('<element-selector>', '<path-to-file>.html')
    Component('.header', './components/header.html');
  </script>
</body>
```

#### Routing
```html
<body>
  <main>
    <nav>
      <a href="/" route>home</a>
      <a href="/#/about" route>about</a>
      <a href="/#/contact" route>contact</a>
      <a href="/other.html">other</a>
    </nav>
    <route/>
  </main>
  <script type="module">
    import { Init, Route } from './kobenii.js';

    Init();

    //Route('<element-selector>', {'<pathname>': '<path-to-file>.html'})
    Route('route', {
      '/': './routes/home.html',
      '/#/about': './routes/about.html',
      '/#/contact': './routes/contact.html',
    });
  </script>
</body>
```

#### Local State
```html
  <main class="main">
    <p>
      My name is <name></name> and my age is <age></age>
    </p>
    <button class="btn">change</button>
  </main>

  <script>
    //import kobenii
    const { State } = await import('<path>/kobenii.js');
    
    //set a inital state
    const data = { name: "revat", age: "69" };
    
    //State('<element-selector>',{key: value})
    State('.main',data);
    
    const btn = document.querySelector('.btn');
    btn.onclick = () => {
      //change data
      data.name = "kobenii";
      data.age = "21";

      //update state
      State('.main',data);
    };  
  </script>
```


## LICENSE
Kobeni is released under the MIT License. See the [LICENSE](LICENSE) file for more information.

### Note
*I think kobeni should be a compiler rather than index.min.js shipped and changing stuff.*
