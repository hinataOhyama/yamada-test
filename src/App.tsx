import {
  AspectRatio,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
} from '@yamada-ui/react';
import './App.css';

function App() {
  return (
    <>
      <main>
        <Center>
          <Box
            as="button"
            p={'sm'}
            rounded={'lg'}
            bg={'secondary'}
            color={'white'}
          >
            <AspectRatio w="md" ratio={4 / 3}>
              <Image src="https://avatars.githubusercontent.com/u/82660649?v=4" />
            </AspectRatio>
            <AspectRatio w={'xl'} ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp" />
            </AspectRatio>
            <p>レッツゴー！！！！！</p>
          </Box>
          <Box>
            <AspectRatio w="md" ratio={4 / 3}>
              <Image src="https://avatars.githubusercontent.com/u/82660649?v=4" />
            </AspectRatio>
            <AspectRatio w={'xl'} ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12974.591815632506!2d139.6932331!3d35.6117497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1a487a026f%3A0x16e7e351187c8216!2z5qCq5byP5Lya56S-IOOCouODkOODg-ODlw!5e0!3m2!1sja!2sjp!4v1674728815443!5m2!1sja!2sjp" />
            </AspectRatio>
            <p>レッツゴー！！！！！</p>
          </Box>
        </Center>
        <Container>
          <Heading size="xl">『ドラゴンボール』（DRAGON BALL）</Heading>
          <Text>
            『ドラゴンボール』（DRAGON
            BALL）は、鳥山明による日本の漫画作品。『週刊少年ジャンプ』（集英社）にて1984年51号から1995年25号まで連載された。世界中に散らばった七つの球をすべて集めると、どんな願いも一つだけ叶えられるという秘宝・ドラゴンボールと、主人公・孫悟空（そん・ごくう）を中心に展開する、「冒険」「夢」「バトル」「友情」などを描いた長編漫画。
          </Text>
        </Container>
        <Flex direction="column" gap="md">
          <Divider variant="solid" borderColor={'black'} />

          <Divider variant="dashed" borderColor={'black'} />

          <Divider variant="dotted" borderColor={'black'} />
        </Flex>
        <Flex h="sm" gap="md">
          <Divider
            orientation="vertical"
            variant="solid"
            borderColor={'black'}
          />

          <Divider
            orientation="vertical"
            variant="dashed"
            borderColor={'black'}
          />

          <Divider
            orientation="vertical"
            variant="dotted"
            borderColor={'black'}
          />
        </Flex>
        <Flex gap="md">
          <Box p="md" rounded="4" bg="primary" color="white">
            Box
          </Box>

          <Box p="md" rounded="4" bg="secondary" color="white">
            Box
          </Box>

          <Box p="md" rounded="4" bg="warning" color="white">
            Box
          </Box>

          <Box p="md" rounded="4" bg="danger" color="white">
            Box
          </Box>
        </Flex>
        <Flex w="full" gap="md">
          <Box p="md" rounded="4" bg="primary" color="white">
            Box
          </Box>

          <Box p="md" rounded="4" bg="secondary" color="white">
            Box
          </Box>

          <Spacer />

          <Box p="md" rounded="4" bg="warning" color="white">
            Box
          </Box>

          <Box p="md" rounded="4" bg="danger" color="white">
            Box
          </Box>
        </Flex>
        <Grid templateColumns="repeat(4, 1fr)" gap="md">
          <GridItem w="full" h="4xs" rounded="md" bg="primary" />
          <GridItem w="full" h="4xs" rounded="md" bg="secondary" />
          <GridItem w="full" h="4xs" rounded="md" bg="warning" />
          <GridItem w="full" h="4xs" rounded="md" bg="danger" />
          <GridItem w="full" h="4xs" rounded="md" bg="danger" />
          <GridItem w="full" h="4xs" rounded="md" bg="warning" />
          <GridItem w="full" h="4xs" rounded="md" bg="secondary" />
          <GridItem w="full" h="4xs" rounded="md" bg="primary" />
        </Grid>
        <Grid
          templateAreas={`
            "one one two three"
            "four five two six"
            "four seven seven eight"
          `}
          gap="md"
        >
          <GridItem area="one" w="full" minH="4xs" rounded="md" bg="primary" />
          <GridItem
            area="two"
            w="full"
            minH="4xs"
            rounded="md"
            bg="secondary"
          />
          <GridItem
            area="three"
            w="full"
            minH="4xs"
            rounded="md"
            bg="warning"
          />
          <GridItem area="four" w="full" minH="4xs" rounded="md" bg="danger" />
          <GridItem area="five" w="full" minH="4xs" rounded="md" bg="primary" />
          <GridItem
            area="six"
            w="full"
            minH="4xs"
            rounded="md"
            bg="secondary"
          />
          <GridItem
            area="seven"
            w="full"
            minH="4xs"
            rounded="md"
            bg="warning"
          />
          <GridItem area="eight" w="full" minH="4xs" rounded="md" bg="danger" />
        </Grid>
        <Grid
          w="full"
          templateColumns="repeat(4, 1fr)"
          templateRows="repeat(3, 1fr)"
          gap="md"
        >
          <GridItem colSpan={2} w="full" minH="4xs" rounded="md" bg="primary" />

          <GridItem
            colSpan={2}
            rowSpan={3}
            w="full"
            minH="4xs"
            rounded="md"
            bg="secondary"
          />

          <GridItem
            rowStart={2}
            rowEnd={4}
            w="full"
            minH="4xs"
            rounded="md"
            bg="warning"
          />

          <GridItem
            colStart={2}
            colEnd={3}
            rowStart={2}
            rowEnd={4}
            w="full"
            minH="4xs"
            rounded="md"
            bg="danger"
          />
        </Grid>
      </main>
    </>
  );
}

export default App;
