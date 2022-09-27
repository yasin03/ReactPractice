import React from "react";

const Practice2 = () => {
  const isLogin = false;
  const name = "Ali";
  const surname = "Can";

  return (
    <>
      {isLogin ? (
        <>
          <div>
            Hoşgeldiniz {name} {surname}
          </div>
          <ul>
            <li>Profiil</li>
            <li>Rezervasyonlar</li>
            <li>Çıkış</li>
          </ul>
        </>
      ) : (
        <div>Lütfen Giriş Yapınız</div>
      )}
    </>
  );
};

export default Practice2;
