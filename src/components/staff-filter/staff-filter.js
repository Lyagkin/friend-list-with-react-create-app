import "./staff-filter.scss";

function StaffFilter({ turnAll, turnReward, turnRaiting, all, reward, raiting }) {
  const buttonList = [
    { name: all, labelText: "Все друзьяшки", functionName: turnAll },
    { name: reward, labelText: "На повышение", functionName: turnReward },
    { name: raiting, labelText: "Рейтинг выше 80", functionName: turnRaiting },
  ];

  console.dir(window.outerWidth);

  const buttons = buttonList.map(({ name, labelText, functionName }) => {
    const active = name === true;
    const activeClass = active ? "btn-light" : "btn-outline-light";
    const windowWidth = window.outerWidth;
    const buttonSize = +windowWidth > 450 ? "btn-lg" : "btn-sm";
    return (
      <button key={labelText} className={`btn ${activeClass} ${buttonSize}`} type="button" onClick={functionName}>
        {labelText}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default StaffFilter;
