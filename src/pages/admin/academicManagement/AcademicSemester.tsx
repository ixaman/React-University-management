import { Card, Col, Row } from 'antd';
import { useGetAllSemestersQuery } from '../../../redux/features/academicSemester/academicSemesterSlice';

const AcademicSemester = () => {
  const { data, isLoading } = useGetAllSemestersQuery(undefined);
  if (isLoading) {
    return <p>Loading..</p>;
  }
  console.log(data);
  return (
    <div>
      <h1 style={{ marginBottom: '1rem' }}>All academic semesters</h1>
      <Row gutter={16}>
        {data?.data?.map((item, index) => (
          <Col span={8} key={index}>
            <Card title={`${item.name}`} bordered={false}>
              Card content
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AcademicSemester;
