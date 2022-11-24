# pruebasEstrategias2022MISO

## Ejecución
Para poder utilizar este repositorio procede en primera instancia clonando el repositorio con el siguiente comando:

```bash
git clone https://github.com/CBarreiro22/pruebasEstrategias2022MISO
```

Luego de haber clonado el repositorio localmente, dentro del directorio ```pruebasEstrategias2022MISO``` instala cypress con el siguiente comando:

```
npm install --save-dev cypress
```

Luego de haber ejecutado el comando anterior abre el archvio cypress.config.js con tu editor favorito y modifica los valores ```baseUrl``` , ```email``` y ```password```
* ```baseUrl``` --> Url de la aplicacion ghost
* ```email``` ---> email registrada en el aplicativo ghost
* ```password``` --> contraseña registrada en el aplicativo ghost

Archvo ejemplo como deberia quedar

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:2368/ghost/#/signin'
  },
  env: {
    email: 'c.barreiroh@uniandes.edu.co',
    password: 'Q123456789'
  }
})
```

Luego de realizar la configuración, verificar que se tenga arriba el aplicativo ghost localmente, en caso de no tenerlo, dirigirse a la carpeta donde se tiene instalado ghost y proceder a levantarlo con el siguiente comando:

```shell
ghost start
```