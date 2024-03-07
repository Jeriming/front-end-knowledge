import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const DARK_STORAGE_KEY = 'useDark'
const DARK_KEY = 'dark'
const LIGHT_KEY = 'light'

const isDark = useDark({
  storageKey: DARK_STORAGE_KEY,
  valueDark: DARK_KEY,
  valueLight: LIGHT_KEY
});

const getFlag = () => {
  return localStorage.getItem(DARK_STORAGE_KEY)
}
const toggleDark = useToggle(isDark);

const App = (props) => {
  const darkTheme = ref(getFlag() === DARK_KEY ? true : false);

  const onChangeTheme = () => {
    toggleDark();
  };

  return {
    darkTheme,
    onChangeTheme,
  };
};

export default App;
