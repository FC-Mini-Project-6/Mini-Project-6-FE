import { useNavigate } from 'react-router-dom';
import InfoSelect from '../../components/InfoSelect';
import {
  age,
  banks,
  jobs,
  regions,
  crdtGrade,
  income,
} from '../../utils/infoData';

type Props = {};

const OptionalInfo = (props: Props) => {
  const navigate = useNavigate();

  return (
    <section className='w-[300px] m-auto'>
      <h1 className='text-4xl font-bold text-center'>궁금해요</h1>
      <p className='text-center mt-4 mw-lGray'>
        미왕론의 회원이 되신 것을 축하해요!🎉
        <br />
        아래 정보를 추가 입력해주시면
        <br />
        맞춤 상품도 추천해드릴게요☺
      </p>
      <form className='flex-col mt-8 text-center'>
        <InfoSelect infos={jobs} defaultValue={'수입 형태'} />
        <InfoSelect infos={age} defaultValue={'나이'} />
        <InfoSelect infos={regions} defaultValue={'거주지'} />
        <InfoSelect infos={banks} defaultValue={'주거래 은행'} />
        <InfoSelect infos={crdtGrade} defaultValue={'신용점수'} />
        <InfoSelect infos={income} defaultValue={'수입 연봉'} />
      </form>

      <div className='flex justify-center gap-3'>
        <button className='mwBtn font-semibold mt-12 !w-[140px]'>
          제출하기
        </button>
        <button
          onClick={() => {
            navigate('/signup');
          }}
          className='mwBtn-white shadow-default font-semibold mt-12 !w-[140px]'
        >
          다음에 할게요
        </button>
      </div>
    </section>
  );
};
export default OptionalInfo;
