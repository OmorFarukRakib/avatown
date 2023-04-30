export const filterPrice = (state) => {
  if (state.filterPrice.code === 0) {
    state.filterPrice.name = "";
  } else if (state.filterPrice.code === 1) {
    state.filterPrice.name = "-> Under $10";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price < 10;
    });
  } else if (state.filterPrice.code === 2) {
    state.filterPrice.name = "-> $10 to $20";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 10 && avatar.price < 20;
    });
  } else if (state.filterPrice.code === 3) {
    state.filterPrice.name = "-> $20 to $30";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 20 && avatar.price < 30;
    });
  } else if (state.filterPrice.code === 4) {
    state.filterPrice.name = "-> $30 to $40";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 30 && avatar.price < 40;
    });
  } else if (state.filterPrice.code === 5) {
    state.filterPrice.name = "-> $40 to $50";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 40 && avatar.price < 50;
    });
  } else if (state.filterPrice.code === 6) {
    state.filterPrice.name = "-> $50 to $70";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 50 && avatar.price < 70;
    });
  } else if (state.filterPrice.code === 7) {
    state.filterPrice.name = "-> $70 & Above";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.price >= 70;
    });
  }
  return state;
};

export const filterPolygon = (state) => {
  if (state.filterPolygon.code === 0) {
    state.filterPolygon.name = "";
  } else if (state.filterPolygon.code === 1) {
    state.filterPolygon.name =
      "-> Under <span className={clsx(styles.triangle)}><BsTriangle /></span>7,500";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon < 7500;
    });
  } else if (state.filterPolygon.code === 2) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>7,500 to <span className={clsx(styles.triangle)}><BsTriangle /></span>10,000";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 7500 && avatar.polygon < 10000;
    });
  } else if (state.filterPolygon.code === 3) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>10,000 to <span className={clsx(styles.triangle)}><BsTriangle /></span>15,000";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 10000 && avatar.polygon < 15000;
    });
  } else if (state.filterPolygon.code === 4) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>15,000 to <span className={clsx(styles.triangle)}><BsTriangle /></span>20,000";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 15000 && avatar.polygon < 20000;
    });
  } else if (state.filterPolygon.code === 5) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>20,000 to <span className={clsx(styles.triangle)}><BsTriangle /></span>32,000";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 20000 && avatar.polygon < 32000;
    });
  } else if (state.filterPolygon.code === 6) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>32,000 to <span className={clsx(styles.triangle)}><BsTriangle /></span>70,000";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 32000 && avatar.polygon < 70000;
    });
  } else if (state.filterPolygon.code === 7) {
    state.filterPolygon.name =
      "-> <span className={clsx(styles.triangle)}><BsTriangle /></span>70,000 & Above";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.polygon >= 70000;
    });
  }
  return state;
};

export const filterAutoUpload = (state) => {
  if (state.filterAutoUploadSupport.code === 1) {
    state.filterAutoUploadSupport.name = "-> Auto upload supported";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.supported === true;
    });
  } else if (state.filterAutoUploadSupport.code === 2) {
    state.filterAutoUploadSupport.name = "-> Auto upload not supported";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.supported === false;
    });
  }else{
    state.filterAutoUploadSupport.name = "";
  }
  return state;
};

export const filterContent = (state) => {
  if (state.filterContents.code === 1) {
    state.filterContents.name = "-> PC Only";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.contents === "PC Only";
    });
  } else if (state.filterContents.code === 2) {
    state.filterContents.name = "-> Quest Only";
    state.avatars = state.avatars.filter((avatar) => {
      return avatar.contents === "Quest Only";
    });
  }else{
    state.filterContents.name = "";
  }
  return state;
};
