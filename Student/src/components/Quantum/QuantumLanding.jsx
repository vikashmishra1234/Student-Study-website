import React from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { GraduationCap, BookOpen, Search, ShoppingCart, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useNavigate } from 'react-router-dom'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)
const MotionCard = motion(Card)

// Sample data for guides
const guides = {
  'First Year': [
    { id: 1,code:'kcs-304', title: 'PPS', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 2,code:'kcs-304', title: 'Physics', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 3,code:'kcs-304', title: 'Chemistry', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 4,code:'kcs-304', title: 'Math I', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 5,code:'kcs-304', title: 'Mechanices', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 6,code:'kcs-304', title: 'Electronices', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
  ],
  'Second Year': [
    { id: 5,code:'kcs-304', title: 'CSS', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 6,code:'kcs-304', title: 'COA', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 7,code:'kcs-304', title: 'Data Structures', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 8,code:'kcs-304', title: 'Descrete Math', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
  ],
  'Third Year': [
    { id: 9,code:'kcs-304', title: 'Compiler Design', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 10,code:'kcs-304', title: 'DAA', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 11,code:'kcs-304', title: 'Java', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 12,code:'kcs-304', title: 'Human Values', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
  ],
  'Fourth Year': [
    { id: 13,code:'kcs-304', title: 'Machine Learning', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 14,code:'kcs-304', title: 'DS', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 15,code:'kcs-304', title: 'CC', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
    { id: 16,code:'kcs-304', title: 'RD', image: 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75' },
  ],
}

export default function EnhancedStudyGuideWelcome() {
  const navigate = useNavigate();
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="sticky"  color="primary" elevation={0}>
        <Toolbar>
          <GraduationCap size={32} color={theme.palette.primary.main} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, color: 'white' }}>
            Quantum Study Guides
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <Search />
          </IconButton>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>

      <MotionBox
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1920x1080?study)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          mb: 8,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ maxWidth: '800px', p: 4 }}>
          <MotionTypography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Unlock Your Academic Potential
          </MotionTypography>
          <MotionTypography
            variant="h5"
            sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.5rem' } }}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover comprehensive study guides tailored for each year of your academic journey
          </MotionTypography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ChevronRight />}
            sx={{
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Explore Guides
          </Button>
        </Box>
      </MotionBox>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {Object.entries(guides).map(([year, yearGuides], index) => (
          <MotionBox
            key={year}
            sx={{ mb: 6 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <Typography variant="h3" gutterBottom sx={{ ml: 2, fontWeight: 'bold', color: 'text.primary', fontSize: { xs: '2rem', md: '3rem' } }}>
              {year}
            </Typography>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
            >
              {yearGuides.map((guide) => (
                <SwiperSlide key={guide.id}>
                  <MotionCard 
                    sx={{ 
                      height: 380,
                      display: 'flex', 
                      flexDirection: 'column',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CardMedia
                      component="img"
                      height="230"
                      sx={{objectFit:'contain'}}
                      image={guide.image}
                      alt={guide.title}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                   <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                   <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {guide.title}
                      </Typography>
                      <Typography gutterBottom variant="h6" component="h2" sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                        {guide.code}
                      </Typography>
                   </Box>
                      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>

                      <Button 
                      onClick={()=>navigate(`/buy?qauntumId=${guide.id}`)}
                        size="large" 
                        sx={{ 
                          alignSelf: 'flex-start', 
                          mt: 2,
                          borderRadius: '20px',
                          backgroundColor: 'secondary.main',
                          color: 'secondary.contrastText',
                          '&:hover': {
                            backgroundColor: 'secondary.dark',
                          },
                        }}
                        variant="contained" 
                        startIcon={<BookOpen />}
                      >
                        Buy it
                      </Button>
                      <Typography sx={{fontSize:'22px'}} variant='span'>$ 1/-</Typography>
                      </Box>
                    </CardContent>
                  </MotionCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </MotionBox>
        ))}
      </Container>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Quantum Study Guides
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
            Empowering students with comprehensive study materials since 2023
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            Quantum Study Guides {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}