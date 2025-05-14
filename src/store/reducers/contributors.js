import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Adarsh from '../../assests/3.sadhna.jpg'; // Import the image for Adarsh
import Sadhnaji from '../../assests/4.sadhna.jpg'; // Import the image for Sadhnaji
import Deepakji from '../../assests/1.sadhna.jpg'; // Import the image for Deepakji
import XYZ from '../../assests/5.sadhna.jpg'; // Assuming this is the image for Aniket Verma

// Mock contributors data - Updated based on user's information
const mockContributors = [
  {
    id: 1,
    name: "आदर्श सिन्हा",
    description: "समाजसेवी और सामुदायिक नेता।",
    image: Adarsh,
    role: "सीईओ और संस्थापक",
    email: "adarsh.sinha@example.com", // Keep placeholder email if not provided
    phone: "8051736663", // Updated phone number
    socialLinks: {
      instagram: "https://www.instagram.com/adarsh_sinha458/",
      facebook: "https://www.facebook.com/adarsh.sinha.9400",
      twitter: "https://twitter.com/adarshsinha",
    }, // Keep placeholder links if not provided
  },
  {
    id: 2,
    name: "दीपक श्रीवास्तव", // Updated name spelling slightly from user input
    description: "स्वास्थ्य सेवा के समर्थक और स्वयंसेवक।",
    image: Deepakji,
    role: "स्वास्थ्य सेवा प्रमुख",
    email: "deepak.srivastava@example.com", // Keep placeholder email
    phone: "9334552622", // Updated phone number
    socialLinks: {
      instagram: "https://instagram.com/deepaksrivastava",
      facebook: "https://facebook.com/deepaksrivastava",
      twitter: "https://twitter.com/deepaksrivastava",
    }, // Keep placeholder links
  },
  {
    id: 3,
    name: "साधना सिन्हा",
    description: "शिक्षा विशेषज्ञ और मार्गदर्शक।",
    image: Sadhnaji,
    role: "शिक्षा विशेषज्ञ",
    email: "sadhna.sinha@example.com", // Keep placeholder email
    phone: "8051736663", // Updated phone number (Note: Same as Adarsh based on input)
    socialLinks: {
      instagram: "https://instagram.com/sadhnasinha",
      facebook: "https://facebook.com/sadhnasinha",
      twitter: "https://twitter.com/sadhnasinha",
    }, // Keep placeholder links
  },
  {
    id: 4,
    name: "अनिकेत वर्मा", // Updated name from Emily Davis
    description: "योगदानकर्ता", // Updated description (generic placeholder)
    image: XYZ, // Keeping the imported image, assuming it's for Aniket
    role: "टीम सदस्य", // Updated role (generic placeholder)
    email: null, // Clearing email as it was specific to Emily
    phone: "9693735468", // Updated phone number
    socialLinks: {}, // Clearing social links as they were specific to Emily
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