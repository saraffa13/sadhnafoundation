import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  campaigns: [],
  campaignDetails: null, // For storing details of a specific campaign
  loading: false,
  error: null,
};

const mockCampaigns = [
  {
    id: 0,
    title: "शिक्षा अभियान",
    description: `हमारा उद्देश्य वंचित बच्चों को गुणवत्तापूर्ण शिक्षा प्रदान करना है।
    यह अभियान बच्चों के उज्ज्वल भविष्य के लिए समर्पित है।
    शिक्षा से समाज में समानता और प्रगति आती है।
    इस अभियान के तहत हम स्कूल निर्माण और शिक्षण सामग्री प्रदान करते हैं।
    आइए, इस पहल का हिस्सा बनें और बच्चों के जीवन में बदलाव लाएं।`,
    images: [
      "https://media.istockphoto.com/id/1395154390/photo/close-up-shot-group-of-children-hands-busy-using-smartphone-at-school-corridor-concept-of.jpg?s=612x612&w=0&k=20&c=Wu1R82y2csZhAj5k6rLM9n8BLMmT1DTroCy5n9hJAZs=",
      "https://media.istockphoto.com/id/1395154390/photo/close-up-shot-group-of-children-hands-busy-using-smartphone-at-school-corridor-concept-of.jpg?s=612x612&w=0&k=20&c=Wu1R82y2csZhAj5k6rLM9n8BLMmT1DTroCy5n9hJAZs=",
    ],
  },
  {
    id: 1,
    title: "स्वास्थ्य अभियान",
    description: `हमारा लक्ष्य सभी को बेहतर स्वास्थ्य सेवाएं प्रदान करना है।
    इस अभियान के तहत हम स्वास्थ्य शिविर और जागरूकता कार्यक्रम आयोजित करते हैं।
    स्वस्थ समाज ही प्रगति का आधार है।
    हम हाशिए पर रहने वाले समुदायों को स्वास्थ्य सेवाएं प्रदान करते हैं।
    इस अभियान में भाग लें और समाज को स्वस्थ बनाएं।`,
    images: [
      "https://media.istockphoto.com/id/1298127415/photo/doctor-holding-red-heart-and-promoting-healthy-lifestyle-and-prevention-of-heart-diseases.jpg?s=612x612&w=0&k=20&c=GsJsD--lbKIIE9-BY7JSu98oa2CEKQEPoDdGRBJsRYM=",
      "https://media.istockphoto.com/id/1298127415/photo/doctor-holding-red-heart-and-promoting-healthy-lifestyle-and-prevention-of-heart-diseases.jpg?s=612x612&w=0&k=20&c=GsJsD--lbKIIE9-BY7JSu98oa2CEKQEPoDdGRBJsRYM=",
    ],
  },
  {
    id: 2,
    title: "महिला सशक्तिकरण अभियान",
    description: `हम महिलाओं को आत्मनिर्भर बनाने के लिए काम करते हैं।
    इस अभियान के तहत हम उन्हें शिक्षा और रोजगार के अवसर प्रदान करते हैं।
    महिला सशक्तिकरण से समाज में समानता आती है।
    हमारा उद्देश्य महिलाओं को उनके अधिकार दिलाना है।
    इस अभियान का हिस्सा बनें और बदलाव लाएं।`,
    images: [
      "https://media.istockphoto.com/id/2142388495/photo/happy-indian-young-woman-holding-flag-and-showing-finger-after-voting-over-isolate-background.jpg?s=612x612&w=0&k=20&c=RfTj91H4asBZXSSvwJqkC5lgFHjI8V0JRcXI5D6bRJk=",
      "https://media.istockphoto.com/id/2142388495/photo/happy-indian-young-woman-holding-flag-and-showing-finger-after-voting-over-isolate-background.jpg?s=612x612&w=0&k=20&c=RfTj91H4asBZXSSvwJqkC5lgFHjI8V0JRcXI5D6bRJk=",
    ],
  },
];

// Thunk for fetching campaigns
export const fetchCampaigns = createAsyncThunk(
  'campaigns/fetchCampaigns',
  async (_, { rejectWithValue }) => {
    try {
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return mockCampaigns;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk for fetching campaign details by ID
export const fetchCampaignDetails = createAsyncThunk(
  'campaigns/fetchCampaignDetails',
  async (id, { rejectWithValue }) => {
    try {
      // Simulate API call with mock data
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const campaign = mockCampaigns.find((campaign) => campaign.id === id);
      if (!campaign) {
        throw new Error('Campaign not found');
      }
      return campaign;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Slice
const campaignsSlice = createSlice({
  name: 'campaigns',
  initialState,
  reducers: {
    addCampaign(state, action) {
      state.campaigns.push(action.payload);
    },
    removeCampaign(state, action) {
      state.campaigns = state.campaigns.filter(
        (campaign) => campaign.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all campaigns
      .addCase(fetchCampaigns.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.loading = false;
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Fetch campaign details by ID
      .addCase(fetchCampaignDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.campaignDetails = null;
      })
      .addCase(fetchCampaignDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.campaignDetails = action.payload;
      })
      .addCase(fetchCampaignDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { addCampaign, removeCampaign } = campaignsSlice.actions;
export default campaignsSlice.reducer;