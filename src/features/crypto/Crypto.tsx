import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Paper from '@mui/material/Paper'
import styles from './Crypto.module.css'
import StatusWrapper from '../../components/StatusWrapper'
import Typography from '@mui/material/Typography'
import { StatusEnum } from '../enum'
import { fetchCurrentCoin } from '../../features/crypto/cryptoSlice'
import { fetchCoinMarkets } from '../../features/crypto/cryptoMarketSlice'
import get from 'lodash/get'
import LinkComponent from '../../components/LinkComponent'
import TitleComponent from '../../components/TitleComponent'
import PriceComponent from '../../components/PriceComponent'

export const Crypto = () => {
  const cryptoInfo = useSelector((state: any) => state.crypto.data)
  const status = useSelector((state: any) => state.crypto.status)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentCoin({ id: 'bitcoin' }))
  }, [])

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }))

  const description = get(cryptoInfo, 'description.en', null)
  const imageSrc = get(cryptoInfo, 'image.large', null)
  const name = get(cryptoInfo, 'name', '')
  const website = get(cryptoInfo, 'links.homepage.0', '')
  const blockchain_site = get(cryptoInfo, 'links.blockchain_site.0', '')
  const official_forum_url = get(cryptoInfo, 'links.official_forum_url.0', '')
  const twitter_screen_name = get(cryptoInfo, 'links.twitter_screen_name', '')
  const facebook_username = get(cryptoInfo, 'links.facebook_username', '')
  const telegram_channel_identifier = get(
    cryptoInfo,
    'links.telegram_channel_identifier',
    ''
  )
  const genesis_date = get(cryptoInfo, 'genesis_date', '')
  const sentiment_votes_up_percentage = get(
    cryptoInfo,
    'sentiment_votes_up_percentage',
    ''
  )
  const sentiment_votes_down_percentage = get(
    cryptoInfo,
    'sentiment_votes_down_percentage',
    ''
  )
  const market_cap_rank = get(cryptoInfo, 'market_cap_rank', '')
  const coingecko_rank = get(cryptoInfo, 'coingecko_rank', '')
  const coingecko_score = get(cryptoInfo, 'coingecko_score', '')
  const community_score = get(cryptoInfo, 'community_score', '')
  const community_data = get(cryptoInfo, 'community_data', '')
  const market_data = get(cryptoInfo, 'market_data', '')
  const price = get(market_data, 'current_price.usd', '')
  const btc = get(market_data, 'market_cap.btc', '')
  const total_volume = get(market_data, 'total_volume.usd', '')

  return (
    <StatusWrapper
      status={status}
      content={(provider) => provider.export}
      classWrapper={{ flexGrow: 1, margin: '50px auto', maxWidth: '70%' }}
    >
      <Grid container className={styles.container}>
        <Grid item xs={3}>
          <Item>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Avatar
                alt={name}
                src={imageSrc}
                sx={{ width: 56, height: 56, margin: '0 8px' }}
              />
              <Typography variant="h5">{cryptoInfo?.name}</Typography>
            </Box>
          </Item>
          <Item>
            <LinkComponent title={'Website'} icon="website" url={website} />
            <LinkComponent
              title={'Blockchain site'}
              icon="explore"
              url={blockchain_site}
            />
            <LinkComponent
              title={'Official forum'}
              icon="message"
              url={official_forum_url}
            />
            <LinkComponent
              title={'Twitter'}
              icon="star"
              url={twitter_screen_name}
            />
            <LinkComponent
              title={'Facebook'}
              icon="facebook"
              url={facebook_username}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <PriceComponent
              title={`$ ${price}`}
              unit="USD"
              ruTitr="price"
              titleStyle={{ fontSize: 35 }}
            />
          </Item>
          <Item>
            <PriceComponent
              title={`$ ${btc}`}
              ruTitr="Market cap"
              unit="USD"
              titleStyle={{ fontSize: 15 }}
            />
          </Item>
          <Item>
            <TitleComponent
              title={`${sentiment_votes_up_percentage}%`}
              ruTitr="Sentiment votes up percentage"
              titleStyle={{
                fontSize: 12,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <TitleComponent
              title={`${market_cap_rank}`}
              ruTitr="Rank"
              titleStyle={{
                fontSize: 12,
                backgroundColor: 'blue',
                color: '#fff',
                padding: '3px 20px',
                borderRadius: '8px',
              }}
            />
          </Item>
          <Item>
            <PriceComponent
              title={`$ ${total_volume}`}
              ruTitr="Volume"
              unit="USD"
              titleStyle={{ fontSize: 15 }}
            />
          </Item>
          <Item>
            <TitleComponent
              title={`${sentiment_votes_down_percentage}%`}
              ruTitr="Sentiment votes down percentage"
              titleStyle={{
                fontSize: 12,
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <TitleComponent
              title={`${coingecko_rank}`}
              ruTitr="Coingecko rank"
              titleStyle={{
                fontSize: 12,
                backgroundColor: 'blue',
                color: '#fff',
                padding: '3px 20px',
                borderRadius: '8px',
              }}
            />
          </Item>
          <Item>
            <TitleComponent
              title={`${coingecko_score}`}
              ruTitr="Coingecko score"
              titleStyle={{
                fontSize: 12,
              }}
            />
          </Item>
          <Item>
            <TitleComponent
              title={`${community_score}`}
              ruTitr="Community score"
              titleStyle={{
                fontSize: 12,
              }}
            />
          </Item>
        </Grid>
      </Grid>
      <Grid container className={styles.container} sx={{ margin: '20px 0' }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              margin: '15px 25px',
              textAlign: 'left',
            }}
          >
            <Typography variant="h4">About Bitcoin</Typography>
            <div
              className={styles.content}
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </Box>
        </Grid>
      </Grid>
    </StatusWrapper>
  )
}
