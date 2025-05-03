import { useState } from 'react';

import feedCSS from '../public/css/Feed.module.css';

interface PlanSectionProps {
  name: string;
  iconSrc?: string;
}

const PlanSection: React.FC<PlanSectionProps> = ({ name, iconSrc = '' }) => {
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [plans, setPlans] = useState<string[]>([]);

  const handleAddClick = () => {
    setShowInput((prev) => !prev); // input 창 토글
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setPlans((prev) => [...prev, inputValue]);
      setInputValue('');
      setShowInput(false);
    }
  };

  return (
    <>
      <div className={feedCSS.section_btn}>
        <img
          className={feedCSS.sectionicon}
          src={iconSrc}
        />
        <p className={feedCSS.section_name}>{name}</p>
        <button
          className={feedCSS.add_plan_btn}
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
      {showInput && (
        <div className={feedCSS.plan_input_container}>
          <div className={feedCSS.icon_img}>
            <img src="/img/todomate_planimg.png" />
          </div>
          <input
            type="text"
            placeholder={`새로운 ${name} 일정 입력하기`}
            className={feedCSS.input_field}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
          />
        </div>
      )}
      <div className={feedCSS.plan_register_container}>
        {plans.map((plan, id) => (
          <div
            key={id}
            className={feedCSS.plan_register_item}
          >
            <div className={feedCSS.icon_img}>
              <img src="/img/todomate_planimg.png" />
            </div>
            <p className={feedCSS.plan_register}>{plan}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlanSection;
