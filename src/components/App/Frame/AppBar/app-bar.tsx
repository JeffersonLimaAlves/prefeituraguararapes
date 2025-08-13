import Brand from './Brand';
import style from './app-bar.module.less'


const AppBar = () => {
  return (
    <div className={style.appBar}>
      <Brand />
    </div>
  );
}

export default AppBar;