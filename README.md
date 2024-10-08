# kobenii

*mini js framework*

**site: [vilgacx.github.io/kobenii](https://vilgacx.github.io/kobenii/)**

Kobenii is tiny, minimal, super-lightweight JavaScript framework designed to provide essential functionalities for building web applications. **Minified version of kobeni ~ 1.17KB**. Kobeni offers powerful features such as **routing, local state, and components**. Kobenii uses .html files as it's file format like a true OG.

### Note
*I am not going to continue this project as I think kobenii should be a something like a compiler rather than .js file shipped and changing stuff. I will be making a another project which will surely be far superior than kobenii*

### Installation

```
curl https://raw.githubusercontent.com/vilgacx/kobenii/main/index.min.js > kobenii.js
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
  <!--elements here-->
  <style>
    /*your styles here*/
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
`<a-component-or-route>.html`
```html
<main class="main">
  <p>
    My name is <name></name> and my age is <age></age>
  </p>
  <button class="btn">change</button>
</main>

<script>
  //import "State"
  import { State } from '<path>/kobenii.js'; 
  
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

### Problems
Can be slow sometimes to load content. The pages load excellently, but sometimes loading content can take upto 500 millisecond.

## LICENSE
kobenii is released under the MIT License. See the [LICENSE](LICENSE) file for more information.
