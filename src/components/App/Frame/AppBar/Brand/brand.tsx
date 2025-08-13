import style from './brand.module.less';


const Brand = () => {
  return (
    <div className={style.appbarbrand}>
      <span className={style.appbarbrandlogo}>
        <img src={`${import.meta.env.BASE_URL}/guararapes.png`} style={{height:32}} />
      </span>
    </div>
  );
}

export default Brand;