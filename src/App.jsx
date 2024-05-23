import './styles.css';
import '@sendbird/uikit-react/dist/index.css';
import SendbirdApp from '@sendbird/uikit-react/App';
import { APP_ID, USER_ID, NICKNAME, THEME } from './const';

export default function App() {
  return (
    <div className="App">
      <SendbirdApp
        appId={APP_ID}
        userId={USER_ID}
        nickname={NICKNAME}
        theme={THEME}
      />
    </div>
  );
}
