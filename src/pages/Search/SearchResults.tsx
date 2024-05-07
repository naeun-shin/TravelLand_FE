import ResultsContent from '@/components/search/ResultsContent';

interface SearchInputProps {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onIconClick?: () => void;
  openSearchModal?: () => void;
  needSearchInput?: boolean;
  value?: string;
  onInputChange?: (query: string) => void;
}

const SearchResults: React.FC<SearchInputProps> = () => {
  return (
    <>
      <ResultsContent />
    </>
  );
};

export default SearchResults;
