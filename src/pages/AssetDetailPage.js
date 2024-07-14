import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { setAssets } from '../components/redux/slices/assetSlice';

const AssetDetailPage = () => {
  const dispatch = useDispatch();
  const assets = useSelector((state) => state.asset.assets);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`API_URL/${id}`);
        dispatch(setAssets(response.data));
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [dispatch, id]);

  return (
    <div>
      {assets.map((asset, index) => (
        <Card key={index} title={asset.title} content={asset.content} />
      ))}
    </div>
  );
};

export default AssetDetailPage;
