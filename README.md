# Three.js Starter Pack

Bem-vindo ao repositório **threejs-starter-pack**! Este repositório foi criado para fornecer um ponto de partida rápido e fácil para aqueles que desejam iniciar um projeto utilizando a biblioteca [Three.js](https://threejs.org/).

## Conteúdo do Repositório

Este repositório inclui um projeto básico de Three.js com a estrutura necessária para começar a desenvolver suas cenas 3D. Aqui está uma visão geral do que está incluído:

- **Estrutura de Diretórios:**
  - `index.html`: Arquivo HTML principal.
  - `main.js`: Script principal onde a cena Three.js é configurada.
  - `styles.css`: Arquivo de estilos CSS (opcional).
  - `public/`: Diretório para armazenar ativos como imagens, texturas, modelos 3D, etc.

- **Dependências:**
  - Inclusão da biblioteca Three.js via Npm.

- **Configuração Básica:**
  - Configuração inicial de uma cena, câmera e renderizador.
  - Adição de um objeto 3D básico (cubo).
  - Configuração do loop de animação.
  - Suporte para redimensionamento da janela.

## Como Usar

### Pré-requisitos

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone o repositório para o seu ambiente local:
    ```bash
    git clone https://github.com/seu-usuario/threejs-starter-pack.git
    cd threejs-starter-pack
    ```

2. Use ```npm install``` para instalar as dependências

3. Use ```npm run dev``` para iniciar a execução do projeto

### Estrutura de Arquivos

```plaintext
threejs-starter-pack/
├── public/
│   └── (adicione seus arquivos aqui)
├── index.html
├── main.js
├── styles.css
└── README.md
```

### Desenvolvimento

- Abra `main.js` para começar a modificar a cena Three.js.
- Adicione seus próprios objetos, luzes, texturas e animações conforme necessário.

### Exemplo de Código

Aqui está um exemplo de como a cena Three.js é configurada no `main.js`:

```javascript
import * as THREE from 'three';

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}

const aspectRatio = sizes.width / sizes.height;

let renderer, scene, camera, mesh;
const clock = new THREE.Clock();

experience();
animate();

function experience() {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(65, aspectRatio, 1, 1000);
  camera.position.z = 5;
  scene.add(camera);

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshNormalMaterial();
  mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  const canvas = document.getElementById('app');
  renderer = new THREE.WebGLRenderer({ canvas: canvas });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.render(scene, camera);
}

function animate() {
  const elapsedTime = clock.getElapsedTime();

  const meshMoviment = elapsedTime * 0.5;
  mesh.position.x = Math.sin(meshMoviment) * 0.4;

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

## Contribuição

Contribuições são bem-vindas! Se você tiver sugestões de melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato em [falacom.ocarlos@gmail.com](mailto:falacom.ocarlos@gmail.com).

---

Espero que este **threejs-starter-pack** ajude você a começar rapidamente com Three.js e a criar incríveis cenas 3D. 

Tamo junto!
