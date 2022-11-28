# pruebasEstrategias2022MISO

En este repositorio se encontrara pruebas realizadas con cyress de la aplicacion ghost de cada una de las funcionalidades que esta tiene usando las estrategias de generacion de datos aleatorios.

Si se quiere consultarlos escenarios realizados con cypress haz click aqui <a href="#"></a>

Adicional, si se quieren saber como se realizaron cada una de las estrategias de generacion de datos con cypress por favor <a href="https://github.com/CBarreiro22/pruebasEstrategias2022MISO/wiki/Generacion_de_datos">Haz click aqui</a>

### Listado de funcionalides

[listado de funcionalidades](funcionalidades.csv)
</br>
[Listado de pruebas](Listado_Pruebas.csv)

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

Dentro del proyecto ejecutar el siguinte comando para las instalacion de herramientas requeridas

```shell
npm install
```

Finalmente ya teniendo todo configurado ejecutar:
```
npx cypress open
```

Despues de eso les aparecera una ventana tal como se muestra a continuación, en la cual se selecciona las pruebas E2E:

![image](https://user-images.githubusercontent.com/111206402/201262734-c9471dee-94d6-46d2-8b24-5f52cb09c6b4.png)

Luego de ello, seleccionamos el navegador de su seleccion para visualizar las pruebas:

![image](https://user-images.githubusercontent.com/111206402/201262973-1d10e796-ec91-43d4-a139-892a5a396325.png)

Luego de ello puedes visualizar todos los escenarios de pruebas donde podra seleccionar cualquiera de los escenarios para su ejecución

![image](https://user-images.githubusercontent.com/111206402/201263210-1159d642-66b1-4d92-bfc6-27a09d30b958.png)