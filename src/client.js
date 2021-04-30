import sanityClient from '@sanity/client';

export default sanityClient({
 projectId: 'o4cctaip',
 dataset: 'production',
 useCdn: true
});
