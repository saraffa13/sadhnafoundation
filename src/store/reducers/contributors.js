import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Adarsh from '../../assests/3.sadhna.jpg'; // Import the image for Adarsh
import Sadhnaji from '../../assests/4.sadhna.jpg'; // Import the image for Sadhnaji
import Deepakji from '../../assests/1.sadhna.jpg'; // Import the image for Deepakji
import XYZ from '../../assests/5.sadhna.jpg'; // Import the image for Emily

// Mock contributors data
const mockContributors = [
  {
    id: 1,
    name: "आदर्श सिन्हा",
    description: "समाजसेवी और सामुदायिक नेता।",
    image: Adarsh,
    role: "सीईओ और संस्थापक",
    email: "adarsh.sinha@example.com",
    phone: "+91-9876543210",
    socialLinks: {
      instagram: "https://www.instagram.com/adarsh_sinha458/",
      facebook: "https://www.facebook.com/adarsh.sinha.9400",
      twitter: "https://twitter.com/adarshsinha",
    },
  },
  {
    id: 2,
    name: "दीपक श्रीवास्तव",
    description: "स्वास्थ्य सेवा के समर्थक और स्वयंसेवक।",
    image: Deepakji,
    role: "स्वास्थ्य सेवा प्रमुख",
    email: "deepak.srivastava@example.com",
    phone: "+91-9876543211",
    socialLinks: {
      instagram: "https://instagram.com/deepaksrivastava",
      facebook: "https://facebook.com/deepaksrivastava",
      twitter: "https://twitter.com/deepaksrivastava",
    },
  },
  {
    id: 3,
    name: "साधना सिन्हा",
    description: "शिक्षा विशेषज्ञ और मार्गदर्शक।",
    image: Sadhnaji,
    role: "शिक्षा विशेषज्ञ",
    email: "sadhna.sinha@example.com",
    phone: "+91-9876543212",
    socialLinks: {
      instagram: "https://instagram.com/sadhnasinha",
      facebook: "https://facebook.com/sadhnasinha",
      twitter: "https://twitter.com/sadhnasinha",
    },
  },
  {
    id: 4,
    name: "एमिली डेविस",
    description: "सतत विकास विशेषज्ञ और कार्यकर्ता।",
    image: XYZ,
    role: "सतत विकास विशेषज्ञ",
    email: "emily.davis@example.com",
    phone: "+91-9876543213",
    socialLinks: {
      instagram: "https://instagram.com/emilydavis",
      facebook: "https://facebook.com/emilydavis",
      twitter: "https://twitter.com/emilydavis",
    },
  },
];

// Thunk to fetch contributors
export const fetchContributors = createAsyncThunk(
  'contributors/fetchContributors',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockContributors;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Contributors slice
const contributorsSlice = createSlice({
  name: 'contributors',
  initialState: {
    contributors: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContributors.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContributors.fulfilled, (state, action) => {
        state.loading = false;
        state.contributors = action.payload;
      })
      .addCase(fetchContributors.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contributorsSlice.reducer;