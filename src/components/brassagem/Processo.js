
import { Steps } from 'antd';
import { PageHeader } from 'antd';
import Panelas from './Panelas'





const { Step } = Steps;

const Processo = ({ processo, panelas, dadospanelas }) => {
  // console.log('pr', processo)
  // const [isModalVisible, setIsModalVisible] = useState(false);

  // const showModal = () => {
  //   setIsModalVisible(true);
  // };

  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  if (processo.modo === "receita") {

    return (
      <>
        <PageHeader style={{ background: "#fff" }}>
          <Steps current={2} percent={60}>
            <Step title="Mostura" subTitle="Left 00:00:08" description="Descrição da mostura" />
            <Step title="Filtragem / Sparge" subTitle="Left 00:00:08" description="Descrição" />
            <Step title="Fervura" subTitle="Left 00:00:08" description="Descrição da fervura" />
          </Steps>
        </PageHeader>
















        { /* <Modal title="Editar" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal> */}
      </>
    );

  }
  else {


    return (
      <Panelas panelas={panelas, dadospanelas} />

    );



  }
}



export default Processo;
