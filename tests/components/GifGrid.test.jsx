import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch';
  test('1.- Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByText('cargando...'));
    expect(screen.getByText(category));
  });

  test('2.- Debe de mostrar items cuando se cargan las imagenes useFetchGifs ', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://localhost/Saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost/Goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
