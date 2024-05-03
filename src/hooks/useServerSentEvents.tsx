import { useEffect } from 'react';
import { EventSourcePolyfill } from 'event-source-polyfill';
import { Cookies } from 'react-cookie';

const useServerSentEvents = () => {
  const cookie = new Cookies();
  const token = cookie.get('Authorization');
  const base_url = import.meta.env.VITE_APP_BASE_URL;

  useEffect(() => {
    new Promise<void>((resolve, reject) => {
      // const eventSource = new EventSource(url);
      const eventSource = new EventSourcePolyfill(`${base_url}v1/subscribe`, {
        headers: {
          Authorization: `${token}`,
        },
        heartbeatTimeout: 90000,
      });
      eventSource.onmessage = (event) => {
        console.log('Event Received:', event.data);
      };
      eventSource.onerror = (error) => {
        console.log('EventSource failed:', error);
        eventSource.close();
        reject(error);
      };
      return () => {
        eventSource.close();
        resolve();
      };
    });
  }, []);
};

export default useServerSentEvents;
