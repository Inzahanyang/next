import Layout from '../components/MyLayout';
import { useRouter } from 'next/router';

const page = () => {
  const router = useRouter();

  console.log(router);
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export default page;
