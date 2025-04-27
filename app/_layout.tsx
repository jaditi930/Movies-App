import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../store";
import "./global.css"


export default function RootLayout() {
  return <Provider store={store}>
  <Stack>
    <Stack.Screen
      name="(tabs)"
      options={{
        headerShown: false,
      }}
      >
      </Stack.Screen>
      <Stack.Screen
      name="movies/[id]"
      options={{
        headerShown: false,
      }}
      >
      </Stack.Screen>
    </Stack>
    </Provider>
}
