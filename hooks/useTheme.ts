import {useAppSelector} from '../store/hooks';
import {theme, IColors} from '../constants/Theme';

export function useTheme(): IColors {
  const currentTheme = useAppSelector(state => state.theme.name);
  return theme[currentTheme];
}
