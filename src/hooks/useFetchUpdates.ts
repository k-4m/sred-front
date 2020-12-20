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

const fetchUpdates = async (): Promise<tResponse> => {
  const response = await fetch('/data');

  return response.json();
};

export const useFetchUpdates = (refetchInterval = 1000) => {
  const updateStoreData = useStoreActions((store) => store.emotion.update);

  useQuery('updates', fetchUpdates, {
    refetchInterval,
    onSuccess: (response) => {
      updateStoreData({
        image: response.image,
        current: response.emotions_data.emotion,
      });
    },
  });
};
