import { useQuery } from 'react-query';
import { useStoreActions } from '../store';
import { eEmotion } from '../store/types';

type tResponse = {
  image: string;
  emotions_data: {
    emotion: Record<eEmotion, number>;
    dominant_emotion: keyof tResponse['emotions_data']['emotion'];
  };
};
type tBrokenResponse = { message: string };

const fetchUpdates = async (): Promise<tResponse | tBrokenResponse> => {
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/data`);

    return response.json();
  } catch {
    return { message: 'error' };
  }
};

// refetchInterval = undefined
export const useFetchUpdates = (refetchInterval = 2000) => {
  const updateStoreData = useStoreActions((store) => store.emotion.update);

  useQuery('updates', fetchUpdates, {
    refetchInterval,
    onSuccess: (response) => {
      if ('image' in response) {
        updateStoreData({
          image: response.image,
          current: response.emotions_data.emotion,
        });
      }
    },
  });
};
