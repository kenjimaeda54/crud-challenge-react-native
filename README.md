# Crud React Native 
Aplicacao de Todo com firebase e Redux


# Oque aprendi?
- Fortaleci o conhecimento em redux aplicando custom middleware
- Criei um middleware que e executado a cada momento   usuario eta logado
- [Referenciais](https://redux.js.org/tutorials/fundamentals/part-4-store#middleware%20and%20https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware)
- Principio abaixo e funções curried,(função que retorna outra)
- Aciton e ação, disparada no exemplo abaixo e para realizar o payloadUser
- Next e uma função que realiza um dispatch para próxima action
- Store  tenho acesso ao estado atual com getStore() e posso realizar um dispatch para outra action como exemplo abaixo

```swift

const middleWareLogged =
  (store: Store) => (next: Dispatch) => (action: Action) => {
    if (action.type === ActionsReduces.payloadUser) {
      auth().onAuthStateChanged(async (userState) => {
        store.dispatch(user(userState));
      });
    }

    next(action);
 };



```

##

## Como testar?
- Projeto foi realido em expo bare flow ou seja possui liberadde para iniciar nativamente com npm run ios ou npm run android
- Tambem inicar com servidor do expo com expo start
- Primeiro clone o projeto apos isto instale as dependencias com gerenciador de pacotes preferidos yarn ou npm
- Para garantir funcionamento em ios cd ios && pod install --repo-update
- Instalacao do cocopados pode ser relizado e recomendao com uso do [brew](https://brew.sh/index_pt-br)



## Print

![alt text]([https://raw.githubusercontent.com/kenjimaeda54/crud-challenge-react-native/blob/develop/Screen%20Shot%202022-09-22%20at%2023.03.43.png])


















