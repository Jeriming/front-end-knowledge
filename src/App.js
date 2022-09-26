import { ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

const App = (props) => {
  const darkTheme = ref(false);

  const onChangeTheme = () => {
    toggleDark();
  };

  return {
    darkTheme,
    onChangeTheme,
  };
};

export default App;
