import { Button } from '@/components/atoms';
import { setToken } from '@/store/authToken';
import { Link } from '@solidjs/router';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <div class="flex flex-col gap-2">
        <Link href="/receipts" class="flex flex-col">
          <Button variant="primary">Receipts</Button>
        </Link>
        <Button type="button" onClick={() => setToken('')} variant="primary">
          Sign out
        </Button>
      </div>
    </>
  );
};

export default Home;
